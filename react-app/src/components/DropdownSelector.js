import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

export default class DropdownSelector extends Component {
    constructor(props) {
      super(props);
      this.title = props.title;
      this.children = props.children;
      this.data = props.data;
    }

    isParent(){
        return this.children.length > 0;
    }
    
    render() {
      let childlist = []
      let i = 0;
      for(var child in this.data.children){
        childlist.push(<DropdownSelector key={i++} data={child} title="Test" children={[{title:"Test2", children:[]}]} />)
      }
      return (<div>
        <h3>{this.data.name}</h3>
        {childlist}
      </div>)
      /*
        const renderTree = (nodes) => (
            <TreeItem key={nodes.id} nodeId={nodes.id} label={<Checkbox label={nodes.name} />}>
              {Array.isArray(nodes.children)
                ? nodes.children.map((node) => renderTree(node))
                : null}
            </TreeItem>
          );
        
        return (
        <TreeView
            aria-label="rich object"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={['root']}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto'}}
        >
            {renderTree(data)}
        </TreeView>
        );*/
    }
}
  

/*
    render() {
        console.log(this.title + " " + this.isParent())
        if(this.isParent()){
            let parentLine = <span className="caret"><Checkbox label={this.title} /></span>;
            let childLines = [];
            for(var i = 0; i < this.children.length; i++){
                let child = this.children[i];
                childLines.push(<DropdownSelector key={i} title={child.title} children={child.children}/>)
            }

            return (
                <li>
                    {parentLine}
                    <ul className="nested">
                        {childLines}
                    </ul>
                </li>
            )
        }else {
            return (
                <li><Checkbox label={this.title} /></li>
                );
        }
    }
  }
  */