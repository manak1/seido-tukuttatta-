const inputValidator = (input) => {
  if (input !== "") return true
}

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "name",
        message: "ð§: ã³ã³ãã¼ãã³ãã®ååãå¥åãã¦ãã ããã",
        validate: inputValidator,
      },
      {
        type: "select",
        name: "category",
        message: "ð§: ã³ã³ãã¼ãã³ãã®ã«ãã´ãªã¼ãé¸æãã¦ãã ããã",
        choices: ["ui", "model", "functional", "page"],
        validate: inputValidator,
      },
      {
        type: "input",
        name: "extraPath",
        message:
          "ð§: ã«ãã´ãªã¼ã§ãmodel/pageãé¸æããå ´åã¯ãã¢ãã«/pageåãå¥åãã¦ãã ãã(ããä»¥å¤ã¯Enter)",
      },
    ]

    return inquirer.prompt(questions).then((answers) => {
      const { name, category, extraPath } = answers
      const path = `${category}/${
        ["model", "page"].includes(category) ? extraPath : ""
      }`
      return {
        ...answers,
        path,
        name,
      }
    })
  },
}
