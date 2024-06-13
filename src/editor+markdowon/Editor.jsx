import React, { useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import parse from 'html-react-parser';
import { marked } from 'marked';
import README from './readme.md';

function Editor() {

    // write content and see the preview in markdown 
    // fetch the markdown file
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [htmlContent, setHtmlContent] = useState('');

    const fetchReadme = async () => {
        try {
            const response = await fetch(`${README}`);
            const markdownText = await response.text();
            const htmlText = marked(markdownText);
            setContent(htmlText);
        } catch (error) {
            console.error('Error fetching the README.md file:', error);
        }
    };

    useEffect(() => {
        fetchReadme();
    }, []);

    useEffect(() => {
        setHtmlContent(content);
    }, [content]);

    return (
        <>
            <JoditEditor
                ref={editor}
                value={htmlContent}
                onChange={newContent => {
                    const updatedMarkdown = marked(newContent);
                    setContent(updatedMarkdown);
                }}
            />

            <hr />
            <div className='border mt-10 border-black'>
                <div className='p-2'>
                    Preview:
                </div>
                <div className='p-2'>
                    {parse(htmlContent)}
                </div>
            </div>
        </>
    );
}

export default Editor;
