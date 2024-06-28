import {useRouter} from 'next/router'

function User() {
    const router = useRouter();
    console.log(router)
  return (
    <div>
        <h1>user # {router.query.userid}</h1>
    </div>
  )
}

export default User
