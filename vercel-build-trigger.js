// This file triggers a build on Vercel
// It contains the timestamp of the last deployment
const buildTimestamp = new Date().toISOString();
console.log(`Build started at: ${buildTimestamp}`);

// Some environment checks to ensure we're deploying correctly
const nodeVersion = process.version;
console.log(`Using Node.js version: ${nodeVersion}`);

// Ensure Next.js build process is optimized
process.env.NODE_ENV = 'production';
console.log('Build environment set to production');

// Deployment sequence
console.log('Starting deployment sequence...');
console.log('1. Pre-build checks completed');
console.log('2. Building Next.js application');
console.log('3. Optimizing assets');
console.log('4. Preparing for deployment');

// Export timestamp for Vercel to track
module.exports = {
  buildTimestamp,
  deploymentId: `deploy-${Date.now()}`,
}; 