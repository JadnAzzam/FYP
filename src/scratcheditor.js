// import React, { useEffect, useRef } from 'react';
// import ScratchWorkspace from 'scratch-blocks';

// function ScratchEditor() {
//   const editorRef = useRef(null);

//   useEffect(() => {
//     const vmScript = document.createElement('script');
//     vmScript.src = 'https://cdn.jsdelivr.net/gh/LLK/scratch-vm@3.0.0/dist/scratch-vm.min.js';
//     vmScript.async = true;

//     const blocksScript = document.createElement('script');
//     blocksScript.src = 'https://cdn.jsdelivr.net/gh/LLK/scratch-blocks@3.1.0/dist/scratch-blocks.min.js';
//     blocksScript.async = true;

//     const l10nScript = document.createElement('script');
//     l10nScript.src = 'https://cdn.jsdelivr.net/gh/LLK/scratch-l10n@3.0.0/dist/scratch-l10n.js';
//     l10nScript.async = true;

//     document.body.appendChild(vmScript);
//     document.body.appendChild(blocksScript);
//     document.body.appendChild(l10nScript);

//     return () => {
//       document.body.removeChild(vmScript);
//       document.body.removeChild(blocksScript);
//       document.body.removeChild(l10nScript);
//     };
//   }, []);

//   useEffect(() => {
//     if (window.Scratch && editorRef.current) {
//       const workspace = new ScratchWorkspace(editorRef.current);
//       workspace.loadBlocks(defaultXml);
//     }
//   }, [editorRef]);

//   return <div ref={editorRef} style={{ height: '100%' }} />;
// }

// export default ScratchEditor;
