export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
};

export const getUniqueValues = (data, type) => {
  let uniqueValues = data.map((item) => item[type]);

  if (type === "colors") uniqueValues = uniqueValues.flat();

  return ["all", ...new Set(uniqueValues)];
};
