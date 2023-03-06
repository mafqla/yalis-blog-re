/**
 * @description: 首页文章列表数据
 */

/**
 * @description: 首页文章列表数据
 * @param {string} title 文章标题
 * @param {string} path 文章路径
 * @param {string} date 文章日期
 * @param {string[]} tag 文章标签
 * @param {string} description 文章描述
 * @param {string} cover 文章封面
 * @param {number} sticky 文章置顶
 * @param {string} author 文章作者
 */
export interface Post {
  title: string
  path: string
  date: string
  tag?: string[]
  categories?: string[]
  description?: string
  cover?: string
  sticky?: number
  author?: string
}

/**
 * @description: 根据文件路径返回文章数据
 * @return {Post} 文章数据
 */
export function getPostByPath() {
  // 获取当前路径下所有的md文件
  const files = import.meta.glob(['../../blogs/**/*.md', '!**/index.md'], {
    eager: true
  })
  // console.log(files)
  const post = []
  //遍历files对象
  for (const key in files) {
    // console.log(files[key].__pageData)
    //@ts-ignore
    const content = files[key].__pageData
    const title = content.title
    const relativePath = content.relativePath.replace('.md', '')
    const frontmatter = content.frontmatter
    // console.log(frontmatter)
    const date = frontmatter.date
    const tag = frontmatter.tags
    let categories = frontmatter.categories
    if (!categories) {
      //如果没有分类则默认为默认分类
      categories = ['默认分类']
      // return categories
    }
    let description = frontmatter.description
    if (!description) {
      //截取文章前100个字符作为描述
      // const description = content.content.slice(0, 100)
      description = '这是一篇没有描述的文章'
      // return description
    }
    const cover = frontmatter.cover
    const sticky = frontmatter.sticky
    const author = frontmatter.author
    const data = {
      title,
      path: relativePath,
      date,
      tag,
      categories,
      description,
      cover,
      sticky,
      author
    }
    // console.log(data)
    post.push(data)
  }

  return post
}

// getPostByPath()

/**
 * 根据post.path读取文件
 *
 */
