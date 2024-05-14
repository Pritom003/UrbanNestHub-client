import img from '../../assets/animation.png';
// import Ticker from 'react-ticker'
import Ticker, { FinancialTicker, NewsTicker } from 'nice-react-ticker';
import icon from '../../assets/animation.png'; // add images, please make sure they can be set as src
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const Sopnser = () => {
  const data = [
    {
      name: '2020',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '2021',
      uv: 8000,
      pv: 7398,
      amt: 2210,
    },
    {
      name: '2021',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '2022',
      uv: 9780,
      pv: 10008,
      amt: 2000,
    },
    {
      name: '2023',
      uv: 9780,
      pv: 10008,
      amt: 2000,
    },

  ];
  return (
    <div  className='my-20'>
       <div className="text-center mt-5 mb-5">
        <h1 className="text-4xl font-semibold">Statistics </h1>
        <h5 className="text-[#93b4ce] text-xl font-medium">Know about our Market value</h5>
      </div>

<div className='px-4 lg:flex block justify-center align-middle items-center gap-10'>
<div className=' '>
<LineChart width={390} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
  </LineChart>
  <div>
 <div className='flex align-middle items-center gap-2'>
 <div className='w-20 h-1 bg-purple-900'></div>
 <p>Clients</p>
 </div>
   
    <div className='flex align-middle items-center gap-2'>
    <div className='w-20 h-1 bg-green-700 mt-2'></div>
    <p>Reveneu</p>
    </div>
  </div>
</div>
  <div>
  <h1 className="text-4xl font-semibold">Road of success</h1>
    <p>Lorem, ipsum dolor sit amet consectetur
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ratione assumenda perferendis consequuntur dolor, optio sint beatae saepe ullam deserunt omnis doloribus error dignissimos dolorem, tempora in aliquid ducimus! Tenetur. adipisicing elit. Recusandae, culpa non ea aliquam debitis ipsam laboriosam eos. Libero, temporibus suscipit aperiam neque numquam optio deleniti odio, autem quibusdam magnam ullam!

    </p>
  </div>
</div>

    <div className=''>
        <Ticker >
          <FinancialTicker id="1" change={true} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="2" change={true} symbol="AAPL" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="3" change={true} symbol="GOOG" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="4" change={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="5" change={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
          <FinancialTicker id="6" change={false} symbol="S&P 500" lastPrice="3372.2" percentage="0.38%" currentPrice="12.9" />
        </Ticker>

        <div className="newsticker ">
          <Ticker isNewsTicker={true}> 
            <NewsTicker id="1" icon={icon}
             title="visit our  share market click here  know about us " url=" https://www.investing.com/equities/bangladesh?utm_source=google&utm_medium=cpc&utm_campaign=21018255986&utm_content=690708111820&utm_term=dsa-1546555491534_&GL_Ad_ID=690708111820&GL_Campaign_ID=21018255986&ISP=1&npl=1&ppu=9800807&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KguQNjI957WW52qvTW9f6g-iKrg-us6NnNvHRI3coAhR4DZTGtzcvCxoCB_AQAvD_BwE" meta="11:10:20"  />
            <NewsTicker id="2" icon={icon} title="visit our  share market click here  know about us " url=" https://www.investing.com/equities/bangladesh?utm_source=google&utm_medium=cpc&utm_campaign=21018255986&utm_content=690708111820&utm_term=dsa-1546555491534_&GL_Ad_ID=690708111820&GL_Campaign_ID=21018255986&ISP=1&npl=1&ppu=9800807&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KguQNjI957WW52qvTW9f6g-iKrg-us6NnNvHRI3coAhR4DZTGtzcvCxoCB_AQAvD_BwE" meta="11:10:20" />
            <NewsTicker id="3" icon={icon}  title="visit our  share market click here  know about us "  url=" https://www.investing.com/equities/bangladesh?utm_source=google&utm_medium=cpc&utm_campaign=21018255986&utm_content=690708111820&utm_term=dsa-1546555491534_&GL_Ad_ID=690708111820&GL_Campaign_ID=21018255986&ISP=1&npl=1&ppu=9800807&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KguQNjI957WW52qvTW9f6g-iKrg-us6NnNvHRI3coAhR4DZTGtzcvCxoCB_AQAvD_BwE" meta="11:10:20" />
            <NewsTicker id="4" icon={icon}  title="visit our  share market click here  know about us "  url=" https://www.investing.com/equities/bangladesh?utm_source=google&utm_medium=cpc&utm_campaign=21018255986&utm_content=690708111820&utm_term=dsa-1546555491534_&GL_Ad_ID=690708111820&GL_Campaign_ID=21018255986&ISP=1&npl=1&ppu=9800807&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KguQNjI957WW52qvTW9f6g-iKrg-us6NnNvHRI3coAhR4DZTGtzcvCxoCB_AQAvD_BwE" meta="11:10:20" />
            <NewsTicker id="5" icon={icon}  title="visit our  share market click here  know about us "  url=" https://www.investing.com/equities/bangladesh?utm_source=google&utm_medium=cpc&utm_campaign=21018255986&utm_content=690708111820&utm_term=dsa-1546555491534_&GL_Ad_ID=690708111820&GL_Campaign_ID=21018255986&ISP=1&npl=1&ppu=9800807&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KguQNjI957WW52qvTW9f6g-iKrg-us6NnNvHRI3coAhR4DZTGtzcvCxoCB_AQAvD_BwE" meta="11:10:20" />
            <NewsTicker id="6" icon={icon} title="visit our  share market click here  know about us "  url=" https://www.investing.com/equities/bangladesh?utm_source=google&utm_medium=cpc&utm_campaign=21018255986&utm_content=690708111820&utm_term=dsa-1546555491534_&GL_Ad_ID=690708111820&GL_Campaign_ID=21018255986&ISP=1&npl=1&ppu=9800807&gad_source=1&gclid=CjwKCAjwrvyxBhAbEiwAEg_KguQNjI957WW52qvTW9f6g-iKrg-us6NnNvHRI3coAhR4DZTGtzcvCxoCB_AQAvD_BwE" meta="11:10:20" />
          </Ticker>
        </div>




      </div>
    </div>
  );
};

export default Sopnser;