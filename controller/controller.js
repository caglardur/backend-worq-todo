const db = require("../database/database")
const HttpError = require("../error/http-error")

const getTasks = async (req, res, next) => {
  try {
    const { rows } = await db.query("select * from tasks")
    res.status(200).json(rows)
  } catch (err) {
    const error = new HttpError(err.message, 500)
    return next(error)
  }
}

const postTask = async (req, res, next) => {
  const { title, description } = req.body

  if (!title || !description) {
    const error = new HttpError("Missing information.", 400)
    return next(error)
  }

  try {
    const { rows } = await db.query("INSERT INTO tasks (title, description) values ($1, $2) returning *", [title, description])
    res.status(200).json(rows[0])
  } catch (err) {
    const error = new HttpError(err.message, 500)
    return next(error)
  }
}

const updateTask = async (req, res, next) => {
  const { title, description, is_completed } = req.body
  const { taskId } = req.params
  const updating_date = new Date().toISOString()

  try {
    if (is_completed) {
      const { rows } = await db.query("UPDATE tasks SET is_completed = $1, updating_date=$2 where id = $3 returning *", [is_completed, updating_date, taskId])
      res.status(200).json(rows[0])
    } else {
      const { rows } = await db.query("UPDATE tasks SET title = $1, description = $2, updating_date= $3 where id = $4 returning *", [title, description, updating_date, taskId])
      res.status(200).json(rows[0])
    }
  } catch (err) {
    const error = new HttpError(err.message, 500)
    return next(error)
  }
}

exports.getTasks = getTasks
exports.postTask = postTask
exports.updateTask = updateTask
