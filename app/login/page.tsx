export default function(){
    return (
        <div className="px-8 py-8 flex flex-col max-w-xl gap-4 mt-20 mx-auto border border-[#ffffff38] bg-[#ffffff0c] rounded-md">
            <h1 className="text-3xl font-bold mb-4 text-center">LOGIN</h1>
            <form className="" action="/login" method="POST">
                <div className="flex flex-col gap-4 mb-8">
                    <input type="email" id="email" name="email" placeholder="Email adress" required autoComplete="true" />
                    <input type="password" id="password" name="password" placeholder="Password" required />
                    <div className="relative flex justify-end">
                        <a className="" href="/forgot-password">Forgot password?</a>
                    </div>
                </div>
                <button className="button" type="submit">Login</button>
            </form>
            <a className="button" href="/register">Register</a>
            <p className=""></p>
        </div>
    )
}