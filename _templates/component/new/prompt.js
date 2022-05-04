const inputValidator = (input) => {
  if (input !== "") return true
}

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "input",
        name: "name",
        message: "🐧: コンポーネントの名前を入力してください。",
        validate: inputValidator,
      },
      {
        type: "select",
        name: "category",
        message: "🐧: コンポーネントのカテゴリーを選択してください。",
        choices: ["ui", "model", "functional", "page"],
        validate: inputValidator,
      },
      {
        type: "input",
        name: "extraPath",
        message:
          "🐧: カテゴリーで、model/pageを選択した場合は、モデル/page名を入力してください(それ以外はEnter)",
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
