import React from 'react';
import Showdown, { Converter } from 'showdown';

export default function Editor({currentNote, updateNote}){
    const [selectedTab, setSelectedTap] = React.useState("write")

    const converter = new Showdown.Converter({
        tables: true, 
        simplifiedAutoLink: true, 
        strikethrough: true,
        tasklists: true
    })


    return (
        <section className='pane editor'>
            <ReactMde
                value={currentNote.body}
                onChange={updateNote}
                selectedTab={selectedTab}
                onTabChange={setSelectedTap}
                generateMarkDownPreview={(markdown) => 
                    Promise.resolve(converter.makeHtml(markdown))}
                minEditorHeight={80}
                heightUnits="vh"
            />


        </section>
    )
}