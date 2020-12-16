import Head from 'next/head'
import { Image } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Head>
        <title>Xuezheng Wang</title>
      </Head>
      <h2>Xuezheng Wang's Website</h2>
      <Image src="icons8-under-construction-64.png" />
      <div>
        Sorry! This site is still under construction! <br />
        But here's the link to my resume if you are interested: <a href='XuezhengWangResume.pdf'>Resume</a>
      </div>
    </>
  )
}
