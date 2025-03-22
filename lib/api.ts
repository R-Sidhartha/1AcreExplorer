export async function fetchProperties(page: number = 1) {
  const res = await fetch(
    `https://prod-be.1acre.in/lands/?seller=211&page=${page}&page_size=10`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch properties");
  }

  const data = await res.json();
  console.log("API Response:", data);
  return data;
}

export async function fetchPropertyLocations() {
  const res = await fetch(
    "https://prod-be.1acre.in/lands/landmaps/?seller_id=211"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch property locations");
  }

  return res.json();
}
