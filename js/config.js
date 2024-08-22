// Constants should be in UPPERCASE_SNAKE_CASE
const API_TOKEN = "GcY0mROujDGyFEEoxCVzv6xQEpGggrhs";
const API_URL = "https://script.google.com/macros/s/AKfycbxaNUKvb5Pd7WMMX7py66RnesYsSoVLbrq2Rt-HeuY6uPtOhHk-V4tiKpZq4BSINTc/exec";

// Use async/await for more readable asynchronous code
async function httpGetPromises(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    // Handle errors in a centralized way or rethrow them
    throw error;
  }
}