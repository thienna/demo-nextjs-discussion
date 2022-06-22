import type { NextPage } from 'next'

const PostDetailPage: NextPage = () => {
    return (
        <div style={{background: 'yellow'}}>
            <h1>POST DETAIL</h1>
        </div>
    )
}
export async function getServerSideProps(ctx: any) {
    return {
        props: {}
    }
}
export default PostDetailPage
