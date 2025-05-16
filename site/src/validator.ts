export function validateMeta(meta: Record<string, any>) {
  const requiredFields = ['title', 'description'];
  for (const field of requiredFields) {
    if (!meta[field]) {
      throw new Error(`Missing required meta field: ${field}`);
    }
  }
}
