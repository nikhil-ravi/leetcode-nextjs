import supabase from "./supabase";

export async function getQuestionsList(term) {
  const dataPromise =
    term.length === 0
      ? supabase.rpc("all_questions_list")
      : supabase.rpc("queried_questions_list", { term });
  let { data, error } = await dataPromise;
  if (error) {
    console.error(error.message);
    return { error };
  } else return { data };
}

export async function getQuestion(qid) {
  let { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("QID", qid);
  if (error) {
    console.error(error.message);
    return { error };
  } else {
    return { data };
  }
}

export async function getSimilarQuestions(qid) {
  let { data, error } = await supabase.rpc("get_similar_questions", { qid });
  if (error) {
    console.error(error.message);
    return { error };
  } else {
    return { data };
  }
}
