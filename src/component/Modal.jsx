

export default function Modal({onClose, onDelete}) {
  return (
    <div className="w-full h-screen bg-[rgba(164,224,130,0.2)] fixed top-0 left-0 z-10"> 
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] z-10 ">
            <div className="bg-white shadow-lg p-6 rounded w-full">
            <p>Are you sure you want to delete it permanently?</p>
            <div className="flex justify-center mt-8">
                <button onClick={onDelete} className="bg-red-700 mx-4 px-6 py-2  rounded text-white mx">Yes</button>
                <button onClick={onClose} className="bg-indigo-900 text-white rounded px-6 py-2">Cancel</button>
            </div>
            </div>

        </div>
    </div>
  )
}
