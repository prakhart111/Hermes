// @ts-ignore
const sendSms = async (token, generatedText, nums) => {
  let headersList = {
    Accept: "*/*",
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    reciever_numbers: nums,
    message: generatedText.trim(),
  });

  let response = await fetch("https://harsh0p.pythonanywhere.com/send_sms/", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  console.log(data);
  return data;
};

export default sendSms;
