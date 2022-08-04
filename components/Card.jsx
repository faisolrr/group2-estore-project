import Link from "next/link";

function DashboardCard(props) {
  return (
    <div className="p-0 flex flex-col justify-between">
      <div>
        <img
          src="https://images.pexels.com/photos/8387134/pexels-photo-8387134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="noimage"
          height="750"
        />
        <p className="text-black border-2 border-neutral-500 p-3 text-center ">
          {props.title}
        </p>
      </div>
      <div>
        <p className="p-3 text-center text-white bg-[#524f4f]">
          IDR {props.price}
        </p>
        <Link href="./login">
          <button className="mt-3 w-full p-3 text-white bg-[#557EBC]">
            Buy
          </button>
        </Link>
      </div>
    </div>
  );
}

function HomeAdminCard(props) {
  return (
    <div className="">
      <table className="text-black w-full table-fixed text-xs md:text-lg lg:text-2xl">
        <thead>
          <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.stock}</td>
            <td>{props.price}</td>
            <td>
              <div className="space-x-1 flex">
                <Link href="./edit_product">
                  <button className="p-1 w-auto bg-[#557EBC] text-white rounded-md te md:text-xl lg:text-3xl">
                    Edit
                  </button>
                </Link>
                <Link href="">
                  <button className="p-1 w-auto bg-[#C5344E] text-white rounded-md md:text-xl lg:text-3xl">
                    Delete
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

function AdminHO(props) {
  return (
    <div className="">
      <table className="text-black w-full table-fixed text-xs md:text-lg lg:text-3xl">
        <thead>
          <tr>
            <td>{props.id}</td>
            <td>{props.date}</td>
            <td>{props.total}</td>

            <td>
              <Link href="../detail_order">
                <button className="p-1 w-auto bg-[#557EBC] text-white rounded-md te md:text-xl lg:text-3xl">
                  Detail
                </button>
              </Link>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

function DetailOrderCard(props) {
  return (
    <div className="">
      <table className="text-black w-full table-fixed text-xs md:text-lg lg:text-3xl">
        <thead>
          <tr>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.stock}</td>
            <td>{props.price}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

function MyAccount(props) {
  return (
    <div>
      <table className="w-full table-fixed">
        <thead>
          <tr className="text-xs md:text-lg lg:text-lg font-bold text-black border-b-2 border-neutral-400 pb-3">
            <td>{props.id}</td>
            <td>{props.date}</td>
            <td>{props.total}</td>

            <td>
              <Link href="../detail_order">
                <button className="p-1 w-auto bg-[#557EBC] text-white rounded-md te md:text-xl lg:text-3xl">
                  Detail
                </button>
              </Link>
            </td>
            <td>
              <Link href="#">
                <button className="p-1 w-auto bg-[#C5344E] text-white rounded-md te md:text-xl lg:text-3xl">
                  Cancel
                </button>
              </Link>
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

function HomeUser(props) {
	return (
		<div className="p-0 flex flex-col justify-between">
			<div>
				<img
					src="https://images.pexels.com/photos/8387134/pexels-photo-8387134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt="noimage"
					height="750"
				/>
				<p className="text-black border-2 border-neutral-500 p-3 text-center ">
					{props.title}
				</p>
			</div>
			<div>
				<p className="p-3 text-center text-white bg-[#524f4f]">
					IDR {props.price}
				</p>
				<Link href="./transaction_summary">
					<button className="mt-3 w-full p-3 text-white bg-[#557EBC]">
						Buy
					</button>
				</Link>
			</div>
		</div>
	);
}

export {
	DashboardCard,
	HomeAdminCard,
	AdminHO,
	DetailOrderCard,
	MyAccount,
	HomeUser,
};
