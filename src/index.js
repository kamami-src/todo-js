import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // p生成
  const p = document.createElement("p");
  p.innerText = text;
  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    const completeTarget = completeButton.parentNode.parentNode;
    deleteFromImcompleteList(completeTarget);
    // 押された完了ボタンの親タグ(li)を完了リストに追加
    const completeText = completeTarget.querySelector("p").innerText;
    const completeLi = document.createElement("li");
    const completeDiv = document.createElement("div");
    completeDiv.className = "list-row";
    const completep = document.createElement("p");
    completep.innerText = completeText;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(li)を完了リストから削除
      const backTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(backTarget);

      // テキスト取得
      const backText = backTarget.querySelector("p").innerText;
      createIncompleteList(backText);
    });
    // ツリー構造を設定
    completeLi.appendChild(completeDiv);
    completeDiv.appendChild(completep);
    completeDiv.appendChild(backButton);

    document.getElementById("complete-list").appendChild(completeLi);
  });
  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromImcompleteList(deleteButton.parentNode.parentNode);
  });

  // ツリー構造を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
