export function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export const generateOrderId = () => {
  const prefix = "order_";
  const alphanumericChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 13; // Length of the random alphanumeric string
  let randomChars = "";

  for (let i = 0; i < length; i++) {
    randomChars += alphanumericChars.charAt(
      Math.floor(Math.random() * alphanumericChars.length)
    );
  }

  return prefix + randomChars;
};
