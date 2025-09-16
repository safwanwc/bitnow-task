const newsLetterAction = async (formData) => {
  "use server";
  const email = formData.get("email");

  console.log(`${email} subscribed to the newsletter`);
};

export default newsLetterAction;
