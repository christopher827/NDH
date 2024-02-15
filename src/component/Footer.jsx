import React from 'react'

function Footer() {
  return (
    <div className="">
    <div className="mx-auto  pt-20 flex flex-col items-center justify-center">
      <div className=" flex flex-col md:items-center f-f-l pt-3 w-full">
        <div className="my-6 text-base text-color f-f-l mx-4 opacity-60 text-center">
          <b>Address:</b> Aptech Technical University<br/>
          Ikeja, Allen Road, Lagos -Nigeria <br/>
          <b>Email:</b> Christopheroche827@gmail.com<br/><b>Mobile:</b> +234 9033631446
        </div>
        <div className="text-sm text-color mb-10 f-f-l self-center">
          <span className="text-sm">
            <a
              href="https://github.com/christopher827"
              target="_blank"
              rel="noreferrer noopener"
              className=" sm:text-center sm:text-base transition-all ease-in-out"
            >
              {"</>"} with ❤️ by Christopher Oche{" "}
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>  )
}
export default Footer