/**
 * 评论内容格式
 *
 * content = [{
 *
 *      type: "text",
 *      content: "Hello, "
 *
 *      }, {
 *
 *      type: "icon",
 *      content: "[31]"
 *
 *      }, {
 *
 *      type: "icon",
 *      content: "World"
 *
 *      }]
 *
 *      string(content) = "Hello, [31]World"
 */
export type CommentContent = {
	/** 类型 */
	type: 'text' | 'icon' | 'image';
	/** 内容 */
	content: string;
}[];
