import blog from '$lib/blog.json'
import { error } from '@sveltejs/kit'

export function load({params}) {

  if (params.id < 0 || params.id >= blog.posts.length) {
    throw error(404, "That post does not exist!!! :(")
  }

  return {
    id: params.id,
    post: blog.posts[params.id],
    name: "Test lksdjflks;d jf"
  }
}