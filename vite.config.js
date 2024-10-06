export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server: {
        host: true, // Open to local network and display URL
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env) // Open if it's not a CodeSandbox
    },
    build: {
        outDir: '../dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true, // Add sourcemap
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.split('node_modules/')[1].split('/')[0].toString(); // Chunk par dépendance
                    }
                },
            },
        },
        chunkSizeWarningLimit: 1000, // Augmente la limite de taille des chunks
    },
};
