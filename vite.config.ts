import vue from '@vitejs/plugin-vue';
import fs from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteStaticCopy } from 'vite-plugin-static-copy';

let packData = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
packData.version = "stable " + packData.version;
const VERS_STR = JSON.stringify(packData.version);

export default defineConfig(({ mode }) => {
    const isProduction = mode === 'production';
    const isCloud = process.env.CLOUD === 'true';

    const origins = ["'self'", "https://arcanumtesting.gitlab.io/"].join(" ");

    const securityPolicies = [
        `default-src ${origins}`,
        `connect-src ${origins}`,
        `img-src ${origins} 'unsafe-inline'`,
        `script-src ${origins} 'unsafe-eval'`,
        `style-src ${origins} 'unsafe-inline' https://fonts.googleapis.com/`,
        `font-src ${origins} https://fonts.gstatic.com/ https://fonts.googleapis.com/`
    ];

    return {

        base: isProduction ? 'arcanum' : undefined,
        plugins: [
            vue({
                template: {
                    compilerOptions: {
                        whitespace: 'condense'
                    }
                }
            }),
            createHtmlPlugin({

                minify: true,
                template: "index.html",
                inject: {
                    data: {
                        SECURITY_POLICY: securityPolicies.join("; "),
                    }
                }

            }),
            viteStaticCopy({
                targets: [
                    {
                        src: 'data',
                        dest: ''
                    },
                ],
                watch: {
                    options: {
                        persistent: false,
                    },
                    reloadPageOnChange: process.env.SILENT ? false : true
                }
            }),

        ],
        define: {
            __DEBUG: true,
            __CHEATS: true,
            __DIST: isProduction,
            __CLOUD: isCloud,
            __VERSION: VERS_STR,
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: !isProduction,
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: !isProduction
        },
        build: {
            outDir: isProduction ? 'dev' : 'dev',
            emptyOutDir: true,
            rollupOptions: {
                input: {
                    wizrobe: resolve(__dirname, 'index.html')
                },
                output: {
                    entryFileNames: 'js/[name].js',
                    chunkFileNames: 'js/[name].bundle.js',
                    assetFileNames: (assetInfo) => {
                        if (assetInfo.name === 'index.html') {
                            return '[name].[ext]';
                        }
                        return 'assets/[name].[ext]';
                    }
                }
            }
        },
        resolve: {
            alias: {
                'modules': resolve(__dirname, 'src/modules'),
                'config': resolve(__dirname, 'src/config'),
                'data': resolve(__dirname, 'data'),
                'ui': resolve(__dirname, 'src/ui'),
                'remote': resolve(__dirname, 'src/remote'),
                '@': resolve(__dirname, './src'),
            }
        },
        optimizeDeps: {
            include: ['vue']
        },
        server: {
            port: 3000,
            cors: true,
            hmr: !process.env.SILENT
        },
        css: {
            preprocessorOptions: {
                // Add any CSS preprocessor options here if needed
            }
        }
    };
});