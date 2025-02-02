export async function load({ locals: { supabase } }) {
  const { data } = await supabase.from("countries").select();
  return {
    countries: data ?? [],
  };
}
