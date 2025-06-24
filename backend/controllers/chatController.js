exports.sendMessage = async (req, res) => {
  const { conversationId, senderId, content, replyToMessageId } = req.body;
  const attachmentUrl = req.file ? `/uploads/${req.file.filename}` : null;
  const attachmentSize = req.file ? req.file.size : null;
  try {
    const msgRes = await pool.query(
      `INSERT INTO messages (conversation_id, sender_id, content, attachment_url, attachment_size, reply_to_message_id)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [conversationId, senderId, content, attachmentUrl, attachmentSize, replyToMessageId || null]
    );
    res.status(201).json(msgRes.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}; 