import{o as e,a as s,i as a}from"./app.ec2b4117.js";const t='{"title":"Themes","description":"","frontmatter":{},"relativePath":"guide/themes.md","lastUpdated":1618694863082}',n={},o=a('<h1 id="themes"><a class="header-anchor" href="#themes" aria-hidden="true">#</a> Themes</h1><p>Quill features two officially supported themes: <code>snow</code> and <code>bubble</code> see <a href="https://vueup.github.io/vue-quill/" target="_blank" rel="noopener noreferrer">DEMO</a>. Themes primarily control the visual look of Quill through its CSS stylesheet, and many changes can easily be made by overriding these rules. At the very least, the <code>core</code> theme must be included for modules like toolbars or tooltips to work.</p><p>To activate a theme, import the stylesheet for the themes you want to use.</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token string">&#39;@vueup/vue-quill/dist/vue-quill.snow.css&#39;</span><span class="token punctuation">;</span>\n<span class="token comment">// OR | AND</span>\n<span class="token keyword">import</span> <span class="token string">&#39;@vueup/vue-quill/dist/vue-quill.bubble.css&#39;</span><span class="token punctuation">;</span>\n<span class="token comment">// you can use both themes at the same time and use them interchangeably</span>\n</code></pre></div><p>These stylesheets can be found in the Quill distribution, but for convenience, they are also linked in VueQuill&#39;s <code>dist</code> folder.</p><p>Then, pass the name of the theme to the <a href="./../api/"><code>theme prop</code></a>.</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>QuillEditor</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>snow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',7);n.render=function(a,t,n,p,l,c){return e(),s("div",null,[o])};export default n;export{t as __pageData};