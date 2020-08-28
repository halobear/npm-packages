export default "### curl基本使用\n- curl: 发送get请求\n```bash\ncurl https://www.example.com\n```\n\n- -A/H: 指定 User-Agent\n```bash\ncurl -A 'Mozilla/5.0 ' https://test.com\n```\n\n- -b: 发送cookie\n```bash\n curl -b 'foo=bar' https://test.com\n```\n\n- -c: 保存服务器设置cookie到文件\n```bash\ncurl -c cookie.txt https://test.com\n```\n\n- -d: 发送post请求的数据体(后可以跟文件)\n```bash\n# header会自动Content-Type : application/x-www-form-urlencoded\ncul -d 'username=aa&password=bb' -X post https://test.com\n```\n- -e: 设置头部Referer, 请求来源\n```bash\ncurl -e 'https://test.com' https://test.com\n```\n\n- -F: 发送二进制文件\n```bash\ncurl -F 'file=**.psd' https://test.com \n```\n\n- -G: URL上的params\n```bash\ncurl -G -d 'a=1' -d 'b=2' https://test.com\n```\n- -i: 打印服务端回应HTTP头\n```bash\ncurl -i https://test.com\n```\n- -I: 向服务器发出 HEAD 请求，然会将服务器返回的 HTTP 标头打印出来\n```bash\ncurl -I https://test.com\n```\n\n- -k: 跳过SSL检测\n```bash\ncurl -k https://test.com\n```\n\n- -L: 跟随重定向\n```bash\ncurl -L https://test.com\n```\n\n- ---limit-rate: 限制带宽\n```bash\ncurl --limit-rate 10k https://test.com\n```\n\n- -o: 保存服务器回应的文件\n```bash\ncurl -o test.txt https://test.com\n```\n\n- -O: 保存服务器文件，使用最后斜线后作为名字\n```bash\ncurl -O https://test.com\n```\n\n- -s: 不输出错误信息\n\n- -u: 用户密码认证\n```bash\ncurl -u 'username:aaa' https://test.com\n```\n\n- -v: 输出通信的过程\n```bash\ncurl -v https://test.com\n```\n\n- -x: 指定http代理\n```bash\ncurl -x proxy.com https://test.com\n```\n\n- -X: 指定请求方法\n```bash\ncurl -X post https://test.com\n```\n\n\n"