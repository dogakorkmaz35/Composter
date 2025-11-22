import React from 'react'

const DocsContainer = ({ title, children }) => {
  return (
    <div>
      <article className="prose prose-invert lg:prose-lg text-zinc-300 max-w-none space-y-6 leading-relaxed">
        {title && <h1 className="text-5xl font-extrabold text-white mb-6">{title}</h1>}
        {children}
      </article>
    </div>
  )
}

export default DocsContainer
