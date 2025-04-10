import '../Notice/Notice.css'
import { Calendar , Contact   } from 'lucide-react';

function Notice() {
    return (
        <div className="NoticePage">
            <h1>Notice Board</h1>
            <div className='NoticePage-MainContent'>
                <div className='NoticePage-Head'>
                    <h1>All Notices</h1>
                    <button>+ ADD NOTICE</button>
                </div>

                <div className='NoticePage-Element1'>
                    <div className='Element1-head'>
                        <div className='Element-title1'>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Unde, dignissimos?</div>
                        <div className='Element1-btns'>
                            <button>EDIT</button>
                            <button>DELETE</button>
                        </div>
                    </div>
                    <div className='Element1-Content'>
                        <div className='Element1-text'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam in dolor,
                                impedit consequatur animi assumenda dicta dolorum earum, unde ad repellat.
                                Inventore quis reprehenderit fuga animi error. Maiores at beatae dolores
                                tempore sapiente. Culpa sint commodi est quia quibusdam consectetur illo
                                fugiat doloribus, recusandae modi reiciendis quas vero numquam itaque,
                            </p>
                        </div>
                        <div className='Element1-info'>
                            <div className='info-elements'><Calendar className="text-gray-600 w-5 h-5" /><p>Publication Date : 12th Dec , 2000</p></div>
                            <div className='info-elements'><Calendar className="text-gray-600 w-5 h-5" /><p>Notice Date : 12th Dec , 2000</p></div>
                            <div className='info-elements'><Contact className="text-gray-600 w-5 h-5" /><p>Created By : Super Admin</p></div>
                            <div className='info-elements'><Contact className="text-gray-600 w-5 h-5" /><p> Super Admin</p></div>
                        </div>
                    </div>
                </div>

                <div className='Element1-head-next'>
                        <div className='Element-title1'>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Unde, dignissimos?</div>
                        <div className='Element1-btns'>
                            <button>EDIT</button>
                            <button>DELETE</button>
                        </div>
                    </div>
                    <div className='Element1-head-next'>
                        <div className='Element-title1'>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Unde, dignissimos?</div>
                        <div className='Element1-btns'>
                            <button>EDIT</button>
                            <button>DELETE</button>
                        </div>
                    </div>
                    <div className='Element1-head-next'>
                        <div className='Element-title1'>Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Unde, dignissimos?</div>
                        <div className='Element1-btns'>
                            <button>EDIT</button>
                            <button>DELETE</button>
                        </div>
                    </div>
            </div>

        </div>

    );
}

export default Notice;