import { CSSProperties } from "react";
import { INodeEventHandlers } from "../node/Node.types";

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

/**
 * Full set of graph configuration.
 */
export interface IGraphConfig {
  automaticRearrangeAfterDropNode: boolean;
  focusZoom: number;
  freezeAllDragEvents: boolean;
  focusAnimationDuration: number;
  height: number;
  initialZoom: number | undefined;
  maxZoom: number;
  minZoom: number;
  panAndZoom: boolean;
  staticGraph: boolean;
  staticGraphWithDragAndDrop: boolean;
  width: number;
  d3: IGraphConfigD3;
  node: IGraphConfigNode;
  link: IGraphConfigLink;
}

export interface IGraphConfigD3 {
  alphaTarget: number;
  gravity: number;
  linkLength: number;
  linkStrength: number;
  disableLinkForce: boolean;
}

export interface IGraphConfigNode extends INodeEventHandlers {
  nodeStyle: CSSProperties;
  labelStyle: CSSProperties;
  labelPosition: string | undefined; // TODO should not allow undefined
  size: number;
  svg: string;
  symbolType: string;
  viewGenerator: Function | undefined;
}

export interface IGraphConfigLink {
  focusable: boolean;
  lineStyle: CSSProperties;
  labelStyle: CSSProperties;
}

export interface IGraphProps {
  id: string;
  data: IGraphPropsData;
  config?: IGraphPropsConfig;
  onClickGraph?;

  onClickNode?;
  onRightClickNode?;
  onMouseOverNode?;
  onMouseOutNode?;
  getLinkAriaLabel?;
  linkStrokeDashArray?;

  onClickLink?;
  onRightClickLink?;
  onMouseOverLink?;
  onMouseOutLink?;
  onKeyDownLink?;
  onNodePositionChange?;
  onZoomChange?;
}

export interface IGraphPropsData {
  nodes: IGraphPropsDataNode[];
  links: IGraphPropsDataLink[];
  focusedNodeId?: string;
}

export interface IGraphPropsDataNode {
  id: string;
}

export interface IGraphPropsDataLink {
  source: string;
  target: string;
  value?: number;
}

export type IGraphPropsConfig = DeepPartial<IGraphConfig>;

export interface IGraphState {
  id: string; // TODO remove it
  config: IGraphConfig;
  links;
  d3Links;
  nodes;
  d3Nodes;
  simulation;
  newGraphElements;
  configUpdated;
  d3ConfigUpdated?;
  transform;
  draggedNode;
  focusedNodeId?;
  enableFocusAnimation?;
  focusTransformation?;
  previousZoom?;
}

export interface IGraphLinkMap {
  [sourceNodeId: string]: {
    [targetNodeId: string]: number;
  };
}

export interface IGraphNodeMap {
  [nodeId: string]: any;
}
