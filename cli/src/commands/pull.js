import { apiRequest } from "../utils/request.js";
import { loadSession } from "../utils/session.js";
import fs from "fs";
import path from "path";

export async function pullComponent(category, title, filepath) { 
    //validaten input
    if (!category || category.trim() === "" || !title || title.trim() === "" || !filepath || filepath.trim() === "") {
        console.log("Category, title, and filepath are required to pull a component.");
        return;
    }
 
    //validate correct filepath
    const absolutePath = path.resolve(filepath);
    let targetPath = absolutePath;
 
    //Check session
    const session = loadSession();
    if (!session || !session.jwt) {
        console.log("You must be logged in. Run: composter login");
        return;
    }
 
    //send request to pull component
    try {
        const res = await apiRequest(`/components?category=${encodeURIComponent(category)}&title=${encodeURIComponent(title)}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        // Parse JSON once
        let body = null;
        try {
            body = await res.json();
        } catch {
            // Ignore if no JSON
        }

        // Handle auth failure
        if (res.status === 401) {
            console.log("Session expired. Run composter login again.");
            return;
        }

        // Handle not found
        if (res.status === 404) {
            console.log(`Component '${title}' under category '${category}' not found.`);
            return;
        }

        // Handle server errors
        if (res.status >= 500) {
            console.log("Server error. Try again later.");
            return;
        }

        // Handle success
        if (res.ok) {
            const component = body.component;
            // If target is a directory, create a filename from title
            try {
                const stat = fs.existsSync(absolutePath) && fs.statSync(absolutePath);
                if (stat && stat.isDirectory()) {
                    let fileName = title;
                    if (!path.extname(fileName)) fileName = `${fileName}.jsx`;
                    targetPath = path.join(absolutePath, fileName);
                } else {
                    // ensure parent dir exists
                    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
                }
            } catch (e) {
                // ignore and proceed
            }

            fs.writeFileSync(targetPath, component.code, "utf-8");
            console.log(`Component '${title}' pulled successfully to '${targetPath}'!`);
            return;
        }

    } catch (err) {
        console.log("Error pulling component:", err);
    }
    
}