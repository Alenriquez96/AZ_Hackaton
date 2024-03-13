export async function handle401(currentUrl: string) {
  try {
    const res = await fetch(
      `https://mediguide-api-latest.onrender.com/v1/login&state=${currentUrl}`
    );
  } catch (error) {
    console.error(error);
  }
}
