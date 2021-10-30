import React from 'react';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import './search.css'

import { Table, Input, ConfigProvider} from 'antd';
const { Search } = Input;

class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          listData: [
              {
                key:'1',
                name: '123',
                email: 'qqq@qq.com',
                phone: 78789,
              },
              {
                key:'2',
                name: '1234',
                email: 'qqq@qq.com',
                phone: 78789,
              },
              {
                key:'3',
                name: '125',
                email: 'qqq@qq.com',
                phone: 78789,
              },
              {
                key:'4',
                name: '1234',
                email: 'qqq@qq.com',
                phone: 78789,
              },
              {
                key:'5',
                name: '2315',
                email: 'qqq@qq.com',
                phone: 78789,
              },
              {
                key:'6',
                name: '134',
                email: 'qqq@qq.com',
                phone: 78789,
              },
              {
                key:'7',
                name: '235',
                email: 'qqq@qq.com',
                phone: 78789,
              },
              {
                key:'8',
                name: '12345',
                email: 'qqq@qq.com',
                phone: 78789,
              },
              {
                key:'9',
                name: '2345',
                email: 'qqq@qq.com',
                phone: 78789,
              },
              {
                key:'10',
                name: '2345',
                email: 'qqq@qq.com',
                phone: 78789,
              },
              {
                key:'11',
                name: '2345',
                email: 'qqq@qq.com',
                phone: 78789,
              },
              {
                key:'12',
                name: '2345',
                email: 'qqq@qq.com',
                phone: 78789,
              },
            ],
          searchList: [],//用于渲染的列表
          pageSize: 10,
        }
    }
    componentDidMount(){
      this.setState({
        searchList: this.state.listData
      })
    }
 
    onSearch = (event) => {
      
      let keyword = event.target.value

      if(keyword){
          let listData = this.state.listData
          let searchList = []
          for (let i=0; i < listData.length; i++){
              if(listData[i].name.match(keyword)){
                  searchList = [...searchList, listData[i]]
              }
          }
          this.setState({
              searchList: searchList
          })
      }
      else{
          this.setState({
              searchList: this.state.listData
          })
      }
    }
    changePage = (current, pageSize) => {
      this.setState({
        pageSize: pageSize
      })
    }

    render(){
      let searchList = this.state.searchList;
        const columns = [
          {
            title: "id",
            dataIndex: 'key',
            key: 'key',
          },
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: '电话',
            dataIndex: 'phone',
            key: 'phone',
          }
        ];

        const paginationProps = {
          position:['bottomLeft'],
          showSizeChanger: true,
          showQuickJumper: true,
          pageSize: parseInt(this.state.pageSize),  
          showTotal: ((total) => {
            return `共 ${total} 条`;
          }),
          onShowSizeChange: this.changePage,
          }

        return(
            <div>
                <div className="searchPage">
                  <Search className="search" placeholder="请输入搜索内容" allowClear onChange={this.onSearch} />
                  <ConfigProvider locale={zhCN}>
                      <Table 
                      rowKey={(item) => item.key} 
                      columns={columns} 
                      dataSource={searchList}
                      bordered='true'
                      size="middle"
                      rowClassName= {(record, index) => ( index % 2 === 1 ? "tableColorOne" : "tableColorTwo")}
                      pagination={paginationProps}
                      />
                    </ConfigProvider>
                </div>
            </div>
        )
    }
}

export default List;