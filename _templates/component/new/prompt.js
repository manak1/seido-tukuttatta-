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
        choices: ["ui", "model", "functional"],
        validate: inputValidator,
      },
      {
        type: "input",
        name: "model",
        message:
          "🐧: カテゴリーで、modelを選択した場合は、モデル名を入力してください(それ以外はEnter)",
      },
    ]

    return inquirer.prompt(questions).then((answers) => {
      const { name, category, model } = answers
      const path = `${category}/${category === "model" ? model : ""}`
      return {
        ...answers,
        path,
        name,
      }
    })
  },
}
