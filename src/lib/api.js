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
//

export async function getSingleQuote(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch quote.");
  }

  const loadedQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
}

export async function addQuote(quoteData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
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

export async function addComment(requestData) {
  //sendRequest({ commentData, quoteId });
  console.log(requestData);
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}

export async function getAllComments(quoteId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
