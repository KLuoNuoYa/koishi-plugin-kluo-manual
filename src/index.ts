import { Context, Schema } from 'koishi'

export const name = 'kluo-manual'

export interface Config {
  content: string
}

export const usage = ` 自用插件

激活后会新建一个指令用于查看K螺使用说明书
`

export const Config: Schema<Config> = Schema.object({
  content: Schema.string().required().description('执行此指令时发送的文本内容')
})

export function apply(ctx: Context, config: Config) {
  ctx.command("kluo-manual", "查看K螺使用说明书").alias('K螺使用说明书')
    .action((_, args) => config.content);
}
