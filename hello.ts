addEventListener("fetch", (event) => {
  const response = new Response("foo bar baz", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
