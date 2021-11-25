import RoomType from "./RoomType";

export default interface BuildingType {
	address: string
	rooms: Array<RoomType>
}