import { Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Space>
        <span>Home</span>
        {/* Nên dùng thẻ Link để chuyển trang vì nó sẽ không render lại toàn bộ component */}
        <Link to='/about'>Route to about</Link>

        {/* Không nên dùng thẻ a để chuyển trang vì nó sẽ render lại toàn bộ component */}
        <a href='/about'>Link to about</a>
        <button
          onClick={() => {
            // Không dùng window.location.href để chuyển trang vì nó sẽ render lại toàn bộ component
            // window.location.href = '/about';
            // Dùng navigate để chuyển trang vì nó sẽ không render lại toàn bộ component
            navigate('/about');
          }}
        >
          Go to about
        </button>
      </Space>
    </div>
  );
}

export default Home;
