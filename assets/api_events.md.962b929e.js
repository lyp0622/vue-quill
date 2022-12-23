import{_ as e,o as t,c as n,a}from"./app.b8044220.js";const _=JSON.parse('{"title":"Events","description":"","frontmatter":{},"headers":[{"level":2,"title":"@textChange","slug":"textchange","link":"#textchange","children":[]},{"level":2,"title":"@selectionChange","slug":"selectionchange","link":"#selectionchange","children":[]},{"level":2,"title":"@editorChange","slug":"editorchange","link":"#editorchange","children":[]},{"level":2,"title":"@update:content","slug":"update-content","link":"#update-content","children":[]},{"level":2,"title":"@focus","slug":"focus","link":"#focus","children":[]},{"level":2,"title":"@blur","slug":"blur","link":"#blur","children":[]},{"level":2,"title":"@ready","slug":"ready","link":"#ready","children":[]}],"relativePath":"api/events.md"}'),r={name:"api/events.md"},l=a('<h1 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h1><h2 id="textchange" tabindex="-1">@textChange <a class="header-anchor" href="#textchange" aria-hidden="true">#</a></h2><ul><li><p><strong>Arguments:</strong> <code>{ delta: Delta, oldContents: Delta, source: Sources }</code></p><p>Triggered when the text changes</p></li></ul><h2 id="selectionchange" tabindex="-1">@selectionChange <a class="header-anchor" href="#selectionchange" aria-hidden="true">#</a></h2><ul><li><p><strong>Arguments:</strong> <code>{ range: RangeStatic, oldRange: RangeStatic, source: Sources }</code></p><p>Triggered when the selections changes</p></li></ul><h2 id="editorchange" tabindex="-1">@editorChange <a class="header-anchor" href="#editorchange" aria-hidden="true">#</a></h2><ul><li><p><strong>Arguments:</strong></p><ul><li><p><code>{ name: &#39;text-change&#39;, delta: Delta, oldContents: Delta, source: Sources}</code></p><p><strong>OR</strong></p></li><li><p><code>{ name: &#39;selection-change&#39;, range: RangeStatic, oldRange: RangeStatic, source: Sources }</code></p></li></ul><p>Triggered when the editor changes, either <code>text-change</code> or <code>selection-change</code></p></li></ul><h2 id="update-content" tabindex="-1">@update:content <a class="header-anchor" href="#update-content" aria-hidden="true">#</a></h2><ul><li><p><strong>Arguments:</strong> <code>content: Delta</code></p><p>Triggered when the editor content changes</p></li></ul><h2 id="focus" tabindex="-1">@focus <a class="header-anchor" href="#focus" aria-hidden="true">#</a></h2><ul><li><p><strong>Arguments:</strong> <code>editor: Ref&lt;Element&gt;</code></p><p>Triggered when the editor gains focus.</p></li></ul><h2 id="blur" tabindex="-1">@blur <a class="header-anchor" href="#blur" aria-hidden="true">#</a></h2><ul><li><p><strong>Arguments:</strong> <code>editor: Ref&lt;Element&gt;</code></p><p>Triggered when the editor loses focus.</p></li></ul><h2 id="ready" tabindex="-1">@ready <a class="header-anchor" href="#ready" aria-hidden="true">#</a></h2><ul><li><p><strong>Arguments:</strong> <code>quill: Quill</code></p><p>Triggered after <code>Quill</code> initialization.</p></li></ul>',15),i=[l];function o(c,d,s,h,g,u){return t(),n("div",null,i)}const f=e(r,[["render",o]]);export{_ as __pageData,f as default};