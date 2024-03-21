export async function handle401(currentUrl: string) {
  try {
    const res = await fetch(
      `https://ec2-18-134-96-73.eu-west-2.compute.amazonaws.com/v1/login&state=${currentUrl}`
    );
  } catch (error) {
    console.error(error);
  }
}
