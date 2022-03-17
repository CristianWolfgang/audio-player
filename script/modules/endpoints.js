
const {origin} = location,
GET = origin+"/api.audio-player-v2/",
CREATE = origin+"/api.audio-player-v2/post.php",
DELETE = origin+"/api.audio-player-v2/delete.php",
UPDATE = origin+"/api.audio-player-v2/update.php",
endpoints = {
	GET,
	CREATE,
	UPDATE,
	DELETE
};
export default endpoints; 