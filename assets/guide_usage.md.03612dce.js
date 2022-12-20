import{_ as s,o as n,c as a,a as l}from"./app.918fbe47.js";const C=JSON.parse('{"title":"Usage","description":"","frontmatter":{},"headers":[{"level":2,"title":"In The Browser","slug":"in-the-browser"},{"level":2,"title":"In Single File Component","slug":"in-single-file-component"}],"relativePath":"guide/usage.md"}'),p={name:"guide/usage.md"},o=l(`<h1 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h1><h2 id="in-the-browser" tabindex="-1">In The Browser <a class="header-anchor" href="#in-the-browser" aria-hidden="true">#</a></h2><p>Register the component in your javascript:</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">QuillEditor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> VueQuill</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">QuillEditor)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>Basic Usage:</p><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">app</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">quill-editor</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">theme</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">snow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">quill-editor</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">INFO</p><p>We&#39;re showing you a simple example here, but in a typical Vue application, we use Single File Components instead of a string template. You can find <strong>SFC implementation</strong> in <a href="./usage.html#in-single-file-component">this section</a>.</p></div><h2 id="in-single-file-component" tabindex="-1">In Single File Component <a class="header-anchor" href="#in-single-file-component" aria-hidden="true">#</a></h2><p><strong>Global Registration:</strong></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">QuillEditor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vueup/vue-quill</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vueup/vue-quill/dist/vue-quill.snow.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">component</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">QuillEditor</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> QuillEditor)</span></span>
<span class="line"></span></code></pre></div><p><strong>or Local Registration:</strong></p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">QuillEditor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vueup/vue-quill</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vueup/vue-quill/dist/vue-quill.snow.css</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">components</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    QuillEditor</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><strong>Basic Usage:</strong></p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">QuillEditor</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">theme</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">snow</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">NOTE</p><p>The component itself does not include any CSS theme. You&#39;ll need to include it separately: <code>import &#39;@vueup/vue-quill/dist/vue-quill.snow.css&#39;</code> or <code>import &#39;@vueup/vue-quill/dist/vue-quill.bubble.css&#39;</code></p></div>`,15),e=[o];function t(c,r,i,D,F,y){return n(),a("div",null,e)}var d=s(p,[["render",t]]);export{C as __pageData,d as default};