'use client';

type ContextArticleProps = {
    title: string;
    chapo: string;
    highlights: string[];
    description: string;
    finalNote?: string;
};

export default function ContextArticle({
                                           title,
                                           chapo,
                                           highlights,
                                           description,
                                           finalNote,
                                       }: ContextArticleProps) {
    return (
        <article
            className="context-article"
            role="article"
            aria-labelledby="article-title"
        >
            <h3 id="article-title" className="context-article__title">
                {title}
            </h3>

            <div className="context-article__chapo">
                <p>{chapo}</p>
            </div>

            <ul className="context-article__highlights">
                {highlights.map((item, index) => (
                    <li key={index} className="context-article__highlight-item">
                        <span className="context-article__highlight-item-icon">✓</span>
                        <span className="context-article__highlight-item-text">{item}</span>
                    </li>
                ))}
            </ul>

            <p className="context-article__description">
                {description}
            </p>

            {finalNote && (
                <p className="context-article__final-note">
                    {finalNote}
                </p>
            )}
        </article>
    );
}

