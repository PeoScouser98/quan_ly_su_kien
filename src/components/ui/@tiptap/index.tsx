import { EditorContent, useEditor } from '@tiptap/react'
import { Box, ScrollArea } from '..'
import BubbleMenu from './components/bubble-menu'
import Toolbar from './components/toolbar'
import { extensions } from './extensions'
import React from 'react'

export interface EditorProps {
   onEditorStateChange: React.Dispatch<React.SetStateAction<{ value: string; isEmpty: boolean }>>
   id?: string
   name?: string
   content?: string
   disabled?: boolean
}

const Editor: React.FC<EditorProps> = ({ content, id, disabled, name, onEditorStateChange }) => {
   const editor = useEditor(
      {
         content,
         extensions,
         editorProps: {
            attributes: {
               class: 'p-4 rounded-lg max-w-full max-h-full overflow-auto border-none outline-none focus:outline-none focus:border-none min-h-[50vh] text-foreground bg-background prose prose-li:p-0'
            }
         },
         enableCoreExtensions: true,
         editable: !Boolean(disabled),
         onUpdate: ({ editor }) => {
            if (onEditorStateChange) onEditorStateChange({ value: editor.getHTML(), isEmpty: editor.isEmpty })
         }
      },
      [content]
   )

   if (!editor) {
      return null
   }

   return (
      <Box className='flex w-full max-w-full flex-col items-stretch divide-y divide-border rounded-lg border shadow'>
         <Toolbar editor={editor} />
         <ScrollArea className='h-[75vh] w-full max-w-full overflow-auto'>
            <EditorContent id={id} editor={editor} name={name} controls={true} content={content} />
         </ScrollArea>
         <BubbleMenu editor={editor} />
         {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu> */}
      </Box>
   )
}

Editor.defaultProps = {
   content: '',
   id: 'editor'
}

export default Editor