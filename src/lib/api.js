const FIREBASE_DOMAIN =
  "https://react-rest-3374a-default-rtdb.europe-west1.firebasedatabase.app";

export async function getAllTeamMembers() {
  const response = await fetch(`${FIREBASE_DOMAIN}/teamMembers.json`);
  const data = await response.json();
  https: if (!response.ok) {
    throw new Error(data.message || "Could not fetch quotes.");
  }

  const transformedTeamMembers = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    transformedTeamMembers.push(quoteObj);
  }

  return transformedTeamMembers;
}

export async function addTeamMember(teamMember) {
  const response = await fetch(`${FIREBASE_DOMAIN}/teamMembers.json`, {
    method: "POST",
    body: JSON.stringify(teamMember),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function addOffer(offerData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/offers.json`, {
    method: "POST",
    body: JSON.stringify(offerData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create quote.");
  }

  return null;
}

export async function getSingleOffer(offerId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/offers/${offerId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedOffer = {
    id: offerId,
    ...data,
  };

  return loadedOffer;
}
