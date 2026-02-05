 46 modules transformed.
x Build failed in 751ms
error during build:
[vite:esbuild] Transform failed with 8 errors:
C:/Users/jonat/OpsyxDev/opsyx-site/src/components/sections/contact-section.tsx:35:14: ERROR: The character ">" is not valid inside a JSX element
C:/Users/jonat/OpsyxDev/opsyx-site/src/components/sections/contact-section.tsx:41:16: ERROR: Unexpected closing "a" tag does not match opening "div" tag
C:/Users/jonat/OpsyxDev/opsyx-site/src/components/sections/contact-section.tsx:46:14: ERROR: The character ">" is not valid inside a JSX element
C:/Users/jonat/OpsyxDev/opsyx-site/src/components/sections/contact-section.tsx:52:16: ERROR: Unexpected closing "a" tag does not match opening "div" tag
C:/Users/jonat/OpsyxDev/opsyx-site/src/components/sections/contact-section.tsx:57:14: ERROR: The character ">" is not valid inside a JSX element
...
file: C:/Users/jonat/OpsyxDev/opsyx-site/src/components/sections/contact-section.tsx:35:14

The character ">" is not valid inside a JSX element
33 |                  href={`mailto:${siteConfig.emails.general}`}
34 |                  className="group flex items-center gap-4 p-4 bg-card border border-border hover:border-alert/50 rounded-sm transition-all duration-300"
35 |                >
   |                ^
36 |                  <Mail className="w-5 h-5 text-alert" />
37 |                  <div className="text-left">

Unexpected closing "a" tag does not match opening "div" tag
39 |                    <span className="text-xs text-muted-foreground">{siteConfig.emails.general}</span>
40 |                  </div>
41 |                </a>
   |                  ^
42 |
43 |

The character ">" is not valid inside a JSX element
44 |                  href={`mailto:${siteConfig.emails.primary}`}
45 |                  className="group flex items-center gap-4 p-4 bg-card border border-border hover:border-alert/50 rounded-sm transition-all duration-300"
46 |                >
   |                ^
47 |                  <Mail className="w-5 h-5 text-ops" />
48 |                  <div className="text-left">

Unexpected closing "a" tag does not match opening "div" tag
50 |                    <span className="text-xs text-muted-foreground">{siteConfig.emails.primary}</span>
51 |                  </div>
52 |                </a>
   |                  ^
53 |
54 |

The character ">" is not valid inside a JSX element
55 |                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
56 |                  className="group flex items-center gap-4 p-4 bg-card border border-border hover:border-alert/50 rounded-sm transition-all duration-300"
57 |                >
   |                ^
58 |                  <Phone className="w-5 h-5 text-alert" />
59 |                  <div className="text-left">

Unexpected closing "a" tag does not match opening "div" tag
61 |                    <span className="text-xs text-muted-foreground">{siteConfig.phone}</span>
62 |                  </div>
63 |                </a>
   |                  ^
64 |
65 |                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-sm">

Unexpected closing "div" tag does not match opening "section" tag
131|                </div>
132|              </div>
133|            </div>
   |              ^
134|          </div>
135|        </div>

Unterminated regular expression
132|              </div>
133|            </div>
134|          </div>
   |                ^
135|        </div>
136|      </section>

    at failureErrorWithLog (C:\Users\jonat\OpsyxDev\opsyx-site\node_modules\esbuild\lib\main.js:1472:15)
    at C:\Users\jonat\OpsyxDev\opsyx-site\node_modules\esbuild\lib\main.js:755:50
    at responseCallbacks.<computed> (C:\Users\jonat\OpsyxDev\opsyx-site\node_modules\esbuild\lib\main.js:622:9)      
    at handleIncomingPacket (C:\Users\jonat\OpsyxDev\opsyx-site\node_modules\esbuild\lib\main.js:677:12)
    at Socket.readFromStdout (C:\Users\jonat\OpsyxDev\opsyx-site\node_modules\esbuild\lib\main.js:600:7)
    at Socket.emit (node:events:508:28)
    at addChunk (node:internal/streams/readable:559:12)
    at readableAddChunkPushByteMode (node:internal/streams/readable:510:3)
    at Readable.push (node:internal/streams/readable:390:5)
    at Pipe.onStreamRead (node:internal/stream_base_commons:189:23)
PS C:\Users\jonat\OpsyxDev\opsyx-site> 
